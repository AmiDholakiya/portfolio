export type ProjectState = {
    id: string | any;
    title: string | undefined;
    technologies: string | undefined;
  };

  export type User = {
    id:string | any;
    first_name: string;
    last_name: string;
    email: string;
    title: array<string>;
    headline: string;
    description: string;
    profile_file: string; 
    resume_link: string;
    location: string;
  }

  export type SocialMedia = {
    id:string;
    name: string;
    profile_link: string;

  }

  export type Project = {
    id: string;
    title: string;
    description: string;
    tag: string;
    cover_file: string
    technologies: array<string>;
    project_type: string;
    source_code_link: string;
    project_link: string
  }