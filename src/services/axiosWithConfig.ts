import axios from "axios";

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig) => {
    axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
    axiosConfig.headers.Authorization = `Bearer ${import.meta.env.VITE_TMBD_TOKEN}`;
    return axiosConfig;
});

export default axiosWithConfig;