// just want to say it now - used chatGPT to help generate the types TOT
// did not want to manually do it

export interface Problem {
  _id: string;
  name: string;
  url: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'contest';
  solution?: {
    asset: {
      url: string;
    };
  };
  problemNumber: number;
}

export interface Presentation {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  url: string;
  quarter: '0' | '1' | '2';
  week: number;
}

export interface WeeklyProblems {
  _id: string;
  year: number;
  quarter: '0' | '1' | '2';
  [key: `week${number}`]: Problem[] | undefined;
}
