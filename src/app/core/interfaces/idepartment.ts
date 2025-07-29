import { IEmployee } from "./iemployee";
import { ITaskItem } from "./itask-item";

export interface IDepartment {
    id: number;
    name: string;
    description: string;
    employees?: IEmployee[];
    tasks?: ITaskItem[];
}
