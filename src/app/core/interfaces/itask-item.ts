import { IDepartment } from "./idepartment";
import { IEmployee } from "./iemployee";

export interface ITaskItem {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: string;
    startDate: Date;
    deadLine: Date;
    createdAt: Date;
    assignedToId: number;
    departmentId: number;
    assignedTo?: IEmployee;
    department?: IDepartment;
}
