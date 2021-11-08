import { SubMenu } from './sub-menu';

export class Menu {
    id!: string;
    description!: string;
    identifier!: string;
    icon!: string;
    type!: string;
    modificationUserCode!: string;
    modificationDate!: string;
    modificationTime!: string;
    merchantChainIndicator!: string;
    groupCardIndicator!: string;
    listArbolModulo!: SubMenu[];


    menuSelected!: boolean; //Sirve para saber el collapse del Menu
 //Sirve para saber el collapse del Menu
}
