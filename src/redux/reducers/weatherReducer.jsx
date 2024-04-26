import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getDetailsByCityName = createAsyncThunk(
  'detailsByCityName',
  async (cityName, { fulfillWithValue, rejectWithValue }) => {
    try {
      let country = null;
      let locationDetails = null;

      if (!cityName) {
        // Attempt to fetch location details from browser geolocation
        if (navigator.geolocation) {
          locationDetails = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          const { latitude, longitude } = locationDetails.coords;

          // Fetch city and country using reverse geocoding
          const reverseGeoResponse = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          cityName = reverseGeoResponse.data.city;
          country = reverseGeoResponse.data.countryName;
        } else {
          throw new Error('Geolocation is not supported by this browser.');
        }
      }

      if (!country) {
        // Fetch country from an additional API if not yet determined
        const locationResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d461a962e735f3811fe21d7eee0a878b`
        );
        country = locationResponse.data.sys.country;
      }

      // Fetch weather data
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&cnt=7&appid=d461a962e735f3811fe21d7eee0a878b`
      );

      return fulfillWithValue({
        data: weatherResponse.data.list,
        cityName,
        country,
      });
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

const weeklyDetailsSlice = createSlice({
  name: 'weeklyDetails',
  initialState: {
    loading: false,
    weeklyData: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getDetailsByCityName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetailsByCityName.fulfilled, (state, action) => {
      const { data, cityName, country } = action.payload;
      let weeklyData = [];
      for (let list of data) {
        const str = list.weather[0].description;
        const words = str.split(' ');
        const capitalizedWords = words.map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1)
        );
        const updatedDescription = capitalizedWords.join(' ');
        const newData = {
          id: list.dt,
          feelsLike: list.main.feels_like,
          temp: list.main.temp,
          minTemp: list.main.temp_min,
          maxTemp: list.main.temp_max,
          pressure: list.main.pressure,
          humidity: list.main.humidity,
          windSpeed: list.wind.speed,
          visibility: list.visibility,
          season: list.weather[0].main,
          description: updatedDescription,
          city: cityName,
          country: country,
        };
        weeklyData.push(newData);
      }
      state.weeklyData = weeklyData;
      state.loading = false;
    });
    builder.addCase(getDetailsByCityName.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

const weeklyDetailsReducer = weeklyDetailsSlice.reducer;

export { weeklyDetailsReducer, getDetailsByCityName };
