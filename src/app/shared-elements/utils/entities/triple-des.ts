import { DES } from './des';

export class TripleDES {

    private static desEncryptor: DES;
    private static CIPHER = 1;
    private static DECIPHER = 2;

    public static key1 = '1234567890ABCDEF';
    public static key2 = 'ABCDEFGHIJKLMNOP';
    public static key3 = 'QRSTUVWXYZ123456';

    public static cipher(data: string, key1: string, key2: string, key3: string): string {
        TripleDES.desEncryptor = new DES();
        return TripleDES.HP_3DES(TripleDES.CIPHER, data, key1, key2, key3).trim();
    }

    public static decipher(data: string, key1: string, key2: string, key3: string): string {
        TripleDES.desEncryptor = new DES();
        return TripleDES.toString(TripleDES.HP_3DES(TripleDES.DECIPHER, TripleDES.toString(data), key1, key2, key3)).trim();
    }

    public static memmove(lpFuente: number[], car: number, len: number): number[] {
        const lenFuente: number = lpFuente.length;
        let lpDestino: number[] = [];
        for (let i = 0; i < lenFuente + len; i++) {
            lpDestino.splice(i, 0, 0);
        }
        lpDestino = TripleDES.arraycopy(lpFuente, 0, lpDestino, 0, lpFuente.length);
        for (let i = 0; i < len; i++) {
            lpDestino[i + lenFuente] = TripleDES.castToByte(car);
        }
        return lpDestino;
    }

    public static CopyByteArray(lpFuente: number[], inicio: number, fin: number): number[] {
        let lpDestino: number[] = [];
        for (let i = 0; i < fin - inicio; i++) {
            lpDestino.splice(i, 0, 0);
        }
        lpDestino = TripleDES.arraycopy(lpFuente, inicio, lpDestino, 0, fin - inicio);
        return lpDestino;
    }

    private static HP_3DES(tipo: number, DataIn: string, key1: string, key2: string, key3: string): string {
        let outputTotal = '';
        let input = '';
        let output = '';
        let posicion = 0;
        const dataInLen: number = DataIn.length;
        try {
            while (posicion < dataInLen) {
                if (posicion + 8 <= dataInLen) {
                    input = DataIn.substring(posicion, posicion + 8);
                } else {
                    input = DataIn.substring(posicion, dataInLen);
                }
                if (input.length < 16) {
                    while (input.length < 16) {
                        input = input.concat(' ');
                    }
                }
                if (tipo === TripleDES.CIPHER) {
                    input = TripleDES.toHexString2(input);
                    output = TripleDES.desEncryptor.cipher(input, key1);
                    output = TripleDES.desEncryptor.decipher(output.toUpperCase(), key2);
                    output = TripleDES.desEncryptor.cipher(output.toUpperCase(), key3);
                }
                if (tipo === TripleDES.DECIPHER) {
                    input = TripleDES.toStringInv(input);
                    output = TripleDES.desEncryptor.decipher(input, key3);
                    output = TripleDES.desEncryptor.cipher(output.toUpperCase(), key2);
                    output = TripleDES.desEncryptor.decipher(output.toUpperCase(), key1);
                }
                posicion += 8;
                outputTotal = outputTotal + output;
            }
        } catch (e) {
            console.log('TripleDES.HP_3DES() : error at ');
            console.log(e);
        }
        return outputTotal;
    }

    public static toHexString(data: string): string {
        const buf: number[] = [];
        const buf2: number[] = [];
        for (let i = 0; i < data.length; i++) {
            buf2.splice(i, 0, 0);
        }
        let j = 0;
        const offset = 0;
        let k: number;
        let length: number;
        const hexDigits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'A'.charCodeAt(0), 'B'.charCodeAt(0), 'C'.charCodeAt(0), 'D'.charCodeAt(0), 'E'.charCodeAt(0), 'F'.charCodeAt(0)];
        for (let i = 0; i < data.length; i++) {
            buf2[i] = TripleDES.castToByte(data.charCodeAt(i));
        }
        length = buf2.length;
        for (let i = 0; i < length * 2; i++) {
            buf.splice(i, 0, 0);
        }
        for (let i = offset; i < offset + length; i++) {
            k = buf2[i];
            const item1 = (k >>> 4) & 0x0F;
            const item2 = k & 0x0F;
            buf[j++] = hexDigits[item1];
            buf[j++] = hexDigits[item2];
        }
        return TripleDES.toStringFromChars(buf);
    }

    public static toHexString2(data: string): string {
        const buf: any[] = [];
        const buf2: number[] = [];
        for (let i = 0; i < data.length; i++) {
            buf2.splice(i, 0, 0);
        }
        let j = 0;
        const offset = 0;
        let k: number;
        let length: number;
        const hexDigits: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < data.length; i++) {
            buf2[i] = TripleDES.castToByte(data.charCodeAt(i));
        }
        length = buf2.length;
        for (let i = 0; i < length * 2; i++) {
            buf.splice(i, 0, 0);
        }
        for (let i = offset; i < offset + length; i++) {
            k = buf2[i];
            const item1 = (k >>> 4) & 0x0F;
            const item2 = k & 0x0F;
            buf[j++] = hexDigits[item1];
            buf[j++] = hexDigits[item2];
        }
        return TripleDES.toStringFromChars(buf);
    }

    public static castToByte(charCode: number): number {
        const aRet: number[] = [];
        let sRet = '';
        if (charCode < 0x80) {
            aRet.push(charCode);
        } else if (charCode < 0x800) {
            aRet.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
        } else if (charCode < 0xd800 || charCode >= 0xe000) {
            aRet.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
        } else {
            charCode = 0x10000 + (((charCode & 0x3ff) << 10) | (charCode & 0x3ff));
            aRet.push(0xf0 | (charCode >> 18), 0x80 | ((charCode >> 12) & 0x3f),
                0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
        }
        for (let i = 0; i < aRet.length; i++) {
            sRet = (sRet + aRet[i]).split('.')[0];
        }
        return Number(charCode);
    }

    public static toString(s: string): string {
        let index = 0;
        let len: number;
        let cadena = '';
        len = s.length;
        while (index < len) {
            const aux: string = s.substring(index, index + 2);
            index = index + 2;
            const b: number = parseInt(aux, 16);
            cadena = cadena + String.fromCharCode(b);
        }
        return cadena;
    }

    public static toStringInv(s: string): string {
        let index = 0;
        let len: number;
        let cadena = '';
        len = s.length;
        while (index < len) {
            const aux: string = s.substring(index, index + 1);
            index = index + 1;
            let a: number = aux.charCodeAt(0);
            if (a < 0) {
                a = 0xFFFFFFFF + a + 1;
            }
            if (a.toString(16).toUpperCase().length === 1) {
                cadena = cadena + '0' + a.toString(16).toUpperCase();
            } else {
                cadena = cadena + a.toString(16).toUpperCase();
            }
        }
        return cadena;
    }

    public static toStringFromChars(chars: number[]): string {
        let sRet = '';
        for (let i = 0; i < chars.length; i++) {
            sRet = sRet + chars[i];
        }
        return sRet;
    }

    public static verificaClave(s: string): number {
        try {
            let index = 0;
            let cadena = '';
            while (index < s.length) {
                const aux: string = s.substring(index, index + 2);
                index = index + 2;
                const b: number = parseInt(aux, 16);
                cadena = cadena + String.fromCharCode(b);
            }
        } catch (e) {
            console.log(e);
            return 1;
        }
        return 0;
    }

    public static getBytes(sString: string): number[] {
        const aRet: number[] = [];
        const length = sString.length;
        for (let i = 0; i < length; i++) {
            const cChar: string = sString.substring(i, i + 1);
            let byte: number = cChar.charCodeAt(0);
            byte = TripleDES.castToByte(byte);
            aRet.push(byte);
        }
        return aRet;
    }

    public static arraycopy(sourceArr: number[], sourcePos: number, destArr: number[], destPos: number, len: number): number[] {
        let aRet: number[];
        let destPosAux = destPos;
        aRet = destArr;
        for (let i = sourcePos; i < (len < sourceArr.length ? len : sourceArr.length); i++) {
            if (destPosAux < destArr.length) {
                aRet[destPosAux] = sourceArr[i];
                destPosAux++;
            } else {
                break;
            }
        }
        return aRet;
    }

}
