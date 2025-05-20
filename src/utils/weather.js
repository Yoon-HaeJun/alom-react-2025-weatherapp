export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요
  const { time, temperature_2m, weather_code} = weatherData.hourly;

  if (!time || !temperature_2m || !weather_code) return [];

  return time.map((dateTime, idx) => ({
    time: formatHour(dateTime),
    temperature: temperature_2m[idx],
    weatherCode: weather_code[idx],
  }))
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요
  const { time, weather_code, temperature_2m_max } = weatherData.daily;

  if (!time || !weather_code || !temperature_2m_max) return [];

  return time.map((date, idx) => ({
    date: formatKoreanDate(date),
    weatherCode: weather_code[idx],
    temperature: temperature_2m_max ? temperature_2m_max[idx] : null,
  }));
};

function formatHour(dateTimeString) {
  const date = new Date(dateTimeString);
  const hour = date.getHours();
  return `${hour}시`;
}

function formatKoreanDate(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[date.getDay()];
  return `${month}월 ${day}일(${dayOfWeek})`;
}