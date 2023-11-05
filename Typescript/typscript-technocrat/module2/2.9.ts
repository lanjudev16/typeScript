{
    interface Vehicle {
        car: string;
        ship: string;
        bike: string
    }

    type CheckVehicle<T>=T extends keyof Vehicle?true : false;
    type HasPlane=CheckVehicle<"">
    

}