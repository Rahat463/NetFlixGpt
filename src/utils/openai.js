import OpenAI from "openai";
import { API_KEY } from "./contants";

const client = new OpenAI({
    apiKey: API_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true
  });
  export default client