export interface IMeal {
   id: string;
   name: string;
   description: string;
   date: string;
   hour: string;
   isDiet: boolean;
}

export type RouteParams = {
   meal: {
      id: string;
      name: string;
      description: string;
      date: string;
      hour: string;
      isDiet: boolean;
   }
}

