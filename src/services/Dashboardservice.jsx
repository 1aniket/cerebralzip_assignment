import axios from "axios";
import supabase from "../utils/supabase";


const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const headerData = localStorage.getItem("token");
export const fetchOverviewData = async () => {
  try {
    const authHeader = "Basic " + headerData;

    const response = await axios.get(`${BASE_URL}/sample_assignment_api_1/`, {
      headers: {
        accept: "application/json",
        Authorization: authHeader,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Fetching sample data failed:",
      error.response ? error.response.data : error.message
    );
  }
};

export const fetchSummaryData = async () => {
  try {
    const authHeader = "Basic " + headerData;

    const response = await axios.get(`${BASE_URL}/sample_assignment_api_3/`, {
      headers: {
        accept: "application/json",
        Authorization: authHeader,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Fetching sample data failed:",
      error.response ? error.response.data : error.message
    );
  }
};

export const fetchCustomerByDeviceData = async () => {
    try {
      const authHeader = "Basic " + headerData;
  
      const response = await axios.get(`${BASE_URL}/sample_assignment_api_4/`, {
        headers: {
          accept: "application/json",
          Authorization: authHeader,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error(
        "Fetching sample data failed:",
        error.response ? error.response.data : error.message
      );
    }
  };


  export const fetchCumminityFeedbackData = async () => {
    try {
      const authHeader = "Basic " + headerData;
  
      const response = await axios.get(`${BASE_URL}/sample_assignment_api_5/`, {
        headers: {
          accept: "application/json",
          Authorization: authHeader,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error(
        "Fetching sample data failed:",
        error.response ? error.response.data : error.message
      );
    }
  };


  export const fetchComparisonData = async () => {
    
  
    try {
      const { data, error } = await supabase.from('comparison').select();
  
      if (error) {
        throw error;
      }
  
      
      return data;
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  };

  export const fetchTopProductsData = async () => {
    
  
    try {
      const { data, error } = await supabase.from('top_products').select();
  
      if (error) {
        throw error;
      }
  
      
      return data;
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  };

  