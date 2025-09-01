export interface Hero {
	name: string;
}

export interface About {
	email: string;
  mobile: string;
 	role: string;
 	website: string;
 	github: string;
 	linkedin: string;
 	stackoverflow: string;
}

export interface TitleDesc {
	title: string;
	desc: string;
}

export interface TitleList {
	title: string;
	list: string[];
}

export interface Experience {
  title: string;
	companyName: string
	date: string;
	list: string[];
}

export interface Education {
	title: string;
	college: string
	date: string;
}

export interface Profile {
  name: string;
  about: About;
	image: string;
	summary: string;
	technologies?: TitleList[];
	experiences: Experience[];
	education: Education;
}

export interface Project {
  id?: string;
	slug?: string;
  title: string;
  description: string;
	shortTech?: string[];
}

export interface ProjectDetail {
	id?: string;
	slug?: string;
  title: string;
  description: string;
	demos?: TitleDesc[];
	codes?: TitleDesc[];
  technologies?: TitleDesc[];
	features?: TitleList[]
}