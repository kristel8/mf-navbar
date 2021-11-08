export class DES {

    public static CIPHER = 1;
    private static DECIPHER = 2;
    private static IP: number[] = [
        58, 50, 42, 34, 26, 18, 10, 2,
        60, 52, 44, 36, 28, 20, 12, 4,
        62, 54, 46, 38, 30, 22, 14, 6,
        64, 56, 48, 40, 32, 24, 16, 8,
        57, 49, 41, 33, 25, 17, 9, 1,
        59, 51, 43, 35, 27, 19, 11, 3,
        61, 53, 45, 37, 29, 21, 13, 5,
        63, 55, 47, 39, 31, 23, 15, 7
    ];
    private static IPinv: number[] = [
        40, 8, 48, 16, 56, 24, 64, 32,
        39, 7, 47, 15, 55, 23, 63, 31,
        38, 6, 46, 14, 54, 22, 62, 30,
        37, 5, 45, 13, 53, 21, 61, 29,
        36, 4, 44, 12, 52, 20, 60, 28,
        35, 3, 43, 11, 51, 19, 59, 27,
        34, 2, 42, 10, 50, 18, 58, 26,
        33, 1, 41, 9, 49, 17, 57, 25
    ];
    private static E: number[] = [
        32, 1, 2, 3, 4, 5,
        4, 5, 6, 7, 8, 9,
        8, 9, 10, 11, 12, 13,
        12, 13, 14, 15, 16, 17,
        16, 17, 18, 19, 20, 21,
        20, 21, 22, 23, 24, 25,
        24, 25, 26, 27, 28, 29,
        28, 29, 30, 31, 32, 1
    ];
    private static S1: number[] = [
        14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7,
        0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8,
        4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0,
        15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13
    ];
    private static S2: number[] = [
        15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10,
        3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5,
        0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15,
        13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9
    ];
    private static S3: number[] = [
        10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8,
        13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1,
        13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7,
        1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12
    ];
    private static S4: number[] = [
        7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15,
        13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9,
        10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4,
        3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14
    ];
    private static S5: number[] = [
        2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9,
        14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6,
        4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14,
        11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3
    ];
    private static S6: number[] = [
        12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11,
        10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8,
        9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6,
        4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13
    ];
    private static S7: number[] = [
        4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1,
        13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6,
        1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2,
        6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12
    ];
    private static S8: number[] = [
        13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7,
        1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2,
        7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8,
        2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11
    ];
    private static P: number[] = [
        16, 7, 20, 21,
        29, 12, 28, 17,
        1, 15, 23, 26,
        5, 18, 31, 10,
        2, 8, 24, 14,
        32, 27, 3, 9,
        19, 13, 30, 6,
        22, 11, 4, 25
    ];
    private static PC1: number[] = [
        57, 49, 41, 33, 25, 17, 9,
        1, 58, 50, 42, 34, 26, 18,
        10, 2, 59, 51, 43, 35, 27,
        19, 11, 3, 60, 52, 44, 36,
        63, 55, 47, 39, 31, 23, 15,
        7, 62, 54, 46, 38, 30, 22,
        14, 6, 61, 53, 45, 37, 29,
        21, 13, 5, 28, 20, 12, 4
    ];
    private static PC2: number[] = [
        14, 17, 11, 24, 1, 5,
        3, 28, 15, 6, 21, 10,
        23, 19, 12, 4, 26, 8,
        16, 7, 27, 20, 13, 2,
        41, 52, 31, 37, 47, 55,
        30, 40, 51, 45, 33, 48,
        44, 49, 39, 56, 34, 53,
        46, 42, 50, 36, 29, 32
    ];
    private static LS: number[] = [
        0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1
    ];
    private Ki: Array<number[]> = [[], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], []];

    constructor() {
        let i: number;
        const lengthArray = this.Ki.length;
        for (i = 0; i < lengthArray; i++) {
            const aArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0];
            // this.Ki.splice(i, 0, aArray);
            this.Ki[i] = aArray;
        }
    }

    public cipher(data: string, key: string): string {
        return this.HP_DES(DES.CIPHER, data, key);
    }

    public decipher(data: string, key: string): string {
        return this.HP_DES(DES.DECIPHER, data, key);
    }

    private INIT_BIT_TAB(dest: number[], nd: number, source: number[], n: number): number[] {
        let masque: number;
        let i: number;
        let j: number;
        for (i = 0; i < n; i++) {
            masque = 0x80;
            for (j = 0; j < 8; j++) {
                dest[8 * i + j + nd] = this.castToByte(((source[i] & masque) >> (7 - j)));
                masque >>= 1;
            }
        }
        return dest;
    }

    private BIN_TO_HEX(vect: number[], source: number[], ns: number): number[] {
        let i: number;
        let j: number;
        let masque: number;
        for (i = 0; i < 8; i++) {
            masque = 7;
            vect[i] = 0;
            for (j = 0; j < 8; j++) {
                vect[i] += this.castToByte(((this.PUISSANCE(masque)) * source[i * 8 + j + ns]));
                --masque;
            }
        }
        return vect;
    }

    private PUISSANCE(puissance: number): number {
        let i: number;
        let res = 1;
        for (i = 1; i <= puissance; i++) {
            res *= 2;
        }
        return (res);
    }

    private VECT_PERMUTATION(vect: number[], nv: number, nVect: number, regle: number[], nRegle: number): number[] {
        const buff: number[] = [];
        for (let y = 0; y < vect.length - nv; y++) {
            buff.splice(y, 0, 0);
        }
        let i: number;
        for (i = 0; i < vect.length - nv; i++) {
            buff[i] = vect[i + nv];
        }
        for (i = 0; i < nRegle; i++) {
            vect[i + nv] = buff[regle[i] - 1];
        }
        return vect;
    }

    private S_BOX_CALC(vect: number[], nv: number): number[] {
        const SBox: Array<number[]> = [[], [], [], [], [], [], [], []];
        let lig: number;
        let col: number;
        let i: number;
        SBox[0] = DES.S1;
        SBox[1] = DES.S2;
        SBox[2] = DES.S3;
        SBox[3] = DES.S4;
        SBox[4] = DES.S5;
        SBox[5] = DES.S6;
        SBox[6] = DES.S7;
        SBox[7] = DES.S8;
        for (i = 0; i < 8; i++) {
            col = 8 * vect[1 + 6 * i + nv] + 4 * vect[2 + 6 * i + nv] + 2 * vect[3 + 6 * i + nv] + vect[4 + 6 * i + nv];
            lig = 2 * vect[6 * i + nv] + vect[5 + 6 * i + nv];
            vect = this.INIT_4BIT_TAB(vect, 4 * i + nv, SBox[i], col + lig * 16);
        }
        return vect;
    }

    private INIT_4BIT_TAB(dest: number[], nd: number, source: number[], ns: number): number[] {
        let masque: number;
        let i: number;
        masque = 0x08;
        for (i = 0; i < 4; i++) {
            dest[i + nd] = this.castToByte(((source[0 + ns] & masque) >> (3 - i)));
            masque >>= 1;
        }
        return dest;
    }

    private XOR(vect1: number[], nv1: number, vect2: number[], nv2: number, nbreBit: number): number[] {
        let i: number;
        for (i = 0; i < nbreBit; i++) {
            vect1[i + nv1] ^= vect2[i + nv2];
        }
        return vect1;
    }

    private LEFT_SHIFTS(vect: number[], nv: number, n: number): number[] {
        let i: number;
        let sauve28: number;
        let sauve0: number;
        for (i = 0; i < n; i++) {
            sauve0 = vect[0 + nv];
            vect = this.memcpy(vect, 0 + nv, vect, 1 + nv, 27);
            vect[27 + nv] = sauve0;
            sauve28 = vect[28 + nv];
            vect = this.memcpy(vect, 28 + nv, vect, 29 + nv, 27);
            vect[55 + nv] = sauve28;
        }
        return vect;
    }

    private CALCUL_SOUS_CLES(K: number[]) {
        let i: number;
        let Kb: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0];
        let interKey: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0];
        Kb = this.INIT_BIT_TAB(Kb, 1, K, 8);
        Kb = this.VECT_PERMUTATION(Kb, 1, 64, DES.PC1, 56);
        for (i = 1; i <= 16; i++) {
            Kb = this.LEFT_SHIFTS(Kb, 1, DES.LS[i]);
            interKey = this.memcpy(interKey, 1, Kb, 1, 56);
            interKey = this.VECT_PERMUTATION(interKey, 1, 56, DES.PC2, 48);
            this.Ki[i] = this.memcpy(this.Ki[i], 1, interKey, 1, 48);
        }
    }

    private memcpy(dest: number[], nd: number, source: number[], ns: number, len: number): number[] {
        let i: number;
        for (i = 0; i < len; i++) {
            dest[nd + i] = source[ns + i];
        }
        return dest;
    }

    private FUNCTION_DES(Flag: number, DataO: number[], K: number[], DesRes: number[]): number[] {
        let right32Bit: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0];
        let i: number;
        let DataB: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0];
        DataB = this.INIT_BIT_TAB(DataB, 1, DataO, 8);
        DataB = this.VECT_PERMUTATION(DataB, 1, 64, DES.IP, 64);
        this.CALCUL_SOUS_CLES(K);
        for (i = 1; i <= 15; i++) {
            right32Bit = this.memcpy(right32Bit, 0, DataB, 33, 32);
            DataB = this.VECT_PERMUTATION(DataB, 33, 32, DES.E, 48);
            switch (Flag) {
                case DES.CIPHER:
                    DataB = this.XOR(DataB, 33, this.Ki[i], 1, 48);
                    break;
                case DES.DECIPHER:
                    DataB = this.XOR(DataB, 33, this.Ki[17 - i], 1, 48);
                    break;
            }
            DataB = this.S_BOX_CALC(DataB, 33);
            DataB = this.VECT_PERMUTATION(DataB, 33, 32, DES.P, 32);
            DataB = this.XOR(DataB, 33, DataB, 1, 32);
            DataB = this.memcpy(DataB, 1, right32Bit, 0, 32);

        }
        right32Bit = this.memcpy(right32Bit, 0, DataB, 33, 32);
        DataB = this.VECT_PERMUTATION(DataB, 33, 32, DES.E, 48);
        if (Flag === DES.CIPHER) {
            DataB = this.XOR(DataB, 33, this.Ki[16], 1, 48);
        } else {
            DataB = this.XOR(DataB, 33, this.Ki[1], 1, 48);
        }
        DataB = this.S_BOX_CALC(DataB, 33);
        DataB = this.VECT_PERMUTATION(DataB, 33, 32, DES.P, 32);
        DataB = this.XOR(DataB, 1, DataB, 33, 32);
        DataB = this.memcpy(DataB, 33, right32Bit, 0, 32);
        DataB = this.VECT_PERMUTATION(DataB, 1, 64, DES.IPinv, 64);
        DesRes = this.BIN_TO_HEX(DesRes, DataB, 1);
        return DesRes;
    }

    private HEX_BIN(c: any): number {
        if ((c >= 0 && c <= 9)) {
            return this.castToByte((c - 0));
        } else {
            return Number((((c + '').charCodeAt(0) - 'A'.charCodeAt(0) + 10)));
        }
    }

    private TO_BCD(ch1: any, ch2: any): number {
        let b1: number;
        let b2: number;
        b1 = this.HEX_BIN(ch1);
        b2 = this.HEX_BIN(ch2);
        return ((b1 << 4) | b2);
    }

    private castToByte(charCode: number): number {
        const aRet: number[] = [];
        const str = String.fromCharCode(charCode);
        for (let ii = 0; ii < str.length; ii++) {
            if (charCode < 0x80) {
                charCode = str.charCodeAt(ii);
                aRet.push(charCode);
            } else if (charCode < 0x800) {
                aRet.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
            } else if (charCode < 0xd800 || charCode >= 0xe000) {
                aRet.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
            } else {
                ii++;
                charCode = 0x10000 + (((charCode & 0x3ff) << 10) | (str.charCodeAt(ii) & 0x3ff));
                aRet.push(0xf0 | (charCode >> 18), 0x80 | ((charCode >> 12) & 0x3f),
                    0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
            }
        }
        return charCode;
    }

    private DESEMPAQ(Block: number[]): string {
        let i: number;
        let c: number;
        let n: number;
        let Buff = '';
        for (i = 0; i < Block.length; i++) {
            if (Block[i] < 0) {
                n = Block[i] + 256;
            } else {
                n = Block[i];
            }
            c = (n / 16);
            let numberString = (c + '').split('.')[0];
            Buff += Number(numberString).toString(16).toUpperCase();
            c = (n % 16);
            numberString = (c + '').split('.')[0];
            Buff += Number(numberString).toString(16).toUpperCase();
        }
        return Buff;
    }

    private EMPAQ(Buff: string): number[] {
        let i: number;
        const Block: number[] = [];
        for (let y = 0; y < (Buff.length / 2); y++) {
            Block.splice(y, 0, 0);
        }
        for (i = 0; i < Buff.length; i += 2) {
            Block[i / 2] = this.TO_BCD(Buff.charAt(i), Buff.charAt(i + 1));
        }
        return Block;
    }

    private HP_DES(tipo: number, DataIn: string, Key: string): string {
        let DataInEmp: number[];
        let KeyEmp: number[];
        const DataOutEmp: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
        try {
            if (DataIn.length < 16) {
                while (DataIn.length < 16) {
                    DataIn = DataIn.concat(' ');
                }
            }
            DataInEmp = this.EMPAQ(DataIn);
            KeyEmp = this.EMPAQ(Key);
            if (tipo === DES.CIPHER) {
                KeyEmp = this.FUNCTION_DES(DES.CIPHER, DataInEmp, KeyEmp, DataOutEmp);
            }
            if (tipo === DES.DECIPHER) {
                KeyEmp = this.FUNCTION_DES(DES.DECIPHER, DataInEmp, KeyEmp, DataOutEmp);
            }
            return this.DESEMPAQ(KeyEmp);
        } catch (e) {
            return '';
        }
    }

}
