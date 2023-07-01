export interface IMeal {
   name: string;
   description: string;
   date: string;
   hour: string;
   isDiet: boolean;
}

export type RouteParams = {
   meal: {
       name: string;
       description: string;
       date: string;
       hour: string;
       isDiet: boolean;
   }
}