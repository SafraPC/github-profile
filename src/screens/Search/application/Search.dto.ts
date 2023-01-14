export interface RepositoriesDTO {
   allow_forking?: true;
   archived?: false;
   created_at?: Date;
   default_branch?: string;
   description?: string;
   disabled?: false;
   fork?: false;
   forks?: number;
   forks_count?: number;
   full_name?: string;
   html_url?: string;
   is_template?: false;
   language?: string;
   license?: { key?: string; name?: string };
   name?: string;
   open_issues?: number;
   open_issues_count?: number;
   owner?: { login?: string; id?: number };
   private?: false;
   size?: number;
   stargazers_count?: number;
   visibility?: string;
   watchers?: number;
   watchers_count?: number;
}
