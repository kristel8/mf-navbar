import { Menu } from './menu';

export class Role {
    id!: string;
    name!: string;
    fullName!: string;
    description!: string;
    application!: string;
    flagFiltroCadenaComercio!: string;
    cadenaComercioId!: string;
    flagFiltroGrupoTarjeta!: string;
    grupoTarjetaId!: string;
    rolTipo!: string;
    modifyUser!: string;
    modifyDate!: string;
    modifyTime!: string;
    listModules!: Menu[];
    cadenaComercioName!: string;
    grupoTarjetaName!: string;
}
