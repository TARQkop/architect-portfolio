export interface Project {
  id:          number;
  title:       string;
  category:    string;
  year:        string;
  location:    string;
  description: string;
  tags:        string[];
  color:       string;
  accent:      string;
}

export interface NavItem {
  label: string;
  href:  string;
}

export interface Service {
  title:       string;
  description: string;
  icon:        string;
}

export interface FormState {
  name:    string;
  email:   string;
  project: string;
  message: string;
}
