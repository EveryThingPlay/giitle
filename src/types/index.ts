export namespace Repo {
  export interface SearchBody {
    q: string;
    sort?: string;
    order?: string;
    per_page?: string;
    page?: number;
  }

  export interface SearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Repo[];
  }

  export interface Repo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: User;
    html_url: string;
    description: string;
    url: string;
    language: string;
    stargazers_count: number;
  }

  export interface User { 
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id?: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: "Organization" | "User";
    site_admin: boolean
  }
}

export namespace PageParams {
  export type theme = "dark" | "light";
}