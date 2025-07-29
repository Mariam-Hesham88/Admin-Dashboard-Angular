import { IDepartment } from "./idepartment";
import { ITaskItem } from "./itask-item";

export interface IEmployee {
    id: number;
    fullName: string;
    email: string;
    jobTitle: string;
    isActive: boolean;
    departmentId: number;
    department?: IDepartment;
    tasks?: ITaskItem[];
}
