import {IEmployee} from "../../helpers/helpers";

export const deleteEmploy = (members: IEmployee[], selectedItem: IEmployee) => {
    const copyMembers = [...members]
    copyMembers.splice(copyMembers.indexOf(selectedItem), 1);
    return copyMembers
}
