//import { OAuthApp, createNodeMiddleware } from "@octokit/oauth-app";

/*const app = new OAuthApp({
  clientType: "oauth-app",
  clientId: "8f6dc6bc895d4c23d4e9",
  clientSecret: "a84a9dbe81c16fd67f5bd2a6e40b4757b8ea5e92", // TODO - Залить данные в .env
}); */

import axios from "axios";

export const github = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "token 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",
    Accept: "application/vnd.github+json"
  }
})