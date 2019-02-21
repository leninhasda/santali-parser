import Santale from '../src/santale'
import 'jest'

describe('Santale', () => {
    it('should be able to convert all the characters to santali', () => {
        let s = new Santale();
        expect(s.parse("Az.")).toEqual("Ạ")
        expect(s.parse("AZ.")).toEqual("Ạ")
        expect(s.parse("az.")).toEqual("ạ")
        expect(s.parse("aZ.")).toEqual("ạ")
        expect(s.parse("Cz'")).toEqual("C̓")
        expect(s.parse("CZ'")).toEqual("C̓")
        expect(s.parse("cz'")).toEqual("c̓")
        expect(s.parse("cZ'")).toEqual("c̓")
        expect(s.parse("Dz.")).toEqual("Ḍ")
        expect(s.parse("DZ.")).toEqual("Ḍ")
        expect(s.parse("dz.")).toEqual("ḍ")
        expect(s.parse("dZ.")).toEqual("ḍ")
        expect(s.parse("Kz'")).toEqual("K̓")
        expect(s.parse("KZ'")).toEqual("K̓")
        expect(s.parse("kz'")).toEqual("k̓")
        expect(s.parse("kZ'")).toEqual("k̓")
        expect(s.parse("Nz'")).toEqual("Ń")
        expect(s.parse("NZ'")).toEqual("Ń")
        expect(s.parse("nz'")).toEqual("ń")
        expect(s.parse("nZ'")).toEqual("ń")
        expect(s.parse("Pz'")).toEqual("P̓")
        expect(s.parse("PZ'")).toEqual("P̓")
        expect(s.parse("pz'")).toEqual("p̓")
        expect(s.parse("pZ'")).toEqual("p̓")
        expect(s.parse("Rz.")).toEqual("Ṛ")
        expect(s.parse("RZ.")).toEqual("Ṛ")
        expect(s.parse("rz.")).toEqual("ṛ")
        expect(s.parse("rZ.")).toEqual("ṛ")
        expect(s.parse("Tz'")).toEqual("T̓")
        expect(s.parse("TZ'")).toEqual("T̓")
        expect(s.parse("tz'")).toEqual("t̓")
        expect(s.parse("tZ'")).toEqual("t̓")
        expect(s.parse("Tz.")).toEqual("Ṭ")
        expect(s.parse("TZ.")).toEqual("Ṭ")
        expect(s.parse("tz.")).toEqual("ṭ")
        expect(s.parse("tZ.")).toEqual("ṭ")
        expect(s.parse("Az~")).toEqual("Ã")
        expect(s.parse("AZ~")).toEqual("Ã")
        expect(s.parse("az~")).toEqual("ã")
        expect(s.parse("aZ~")).toEqual("ã")
        expect(s.parse("Az.~")).toEqual("Ạ̃")
        expect(s.parse("AZ.~")).toEqual("Ạ̃")
        expect(s.parse("Az~.")).toEqual("Ạ̃")
        expect(s.parse("AA~.")).toEqual("Ạ̃")
        expect(s.parse("az.~")).toEqual("ạ̃")
        expect(s.parse("aZ.~")).toEqual("ạ̃")
        expect(s.parse("az~.")).toEqual("ạ̃")
        expect(s.parse("aZ~.")).toEqual("ạ̃")
        expect(s.parse("Ez~")).toEqual("Ẽ")
        expect(s.parse("EZ~")).toEqual("Ẽ")
        expect(s.parse("ez~")).toEqual("ẽ")
        expect(s.parse("eZ~")).toEqual("ẽ")
        expect(s.parse("Iz~")).toEqual("Ĩ")
        expect(s.parse("IZ~")).toEqual("Ĩ")
        expect(s.parse("iz~")).toEqual("ĩ")
        expect(s.parse("iZ~")).toEqual("ĩ")
        expect(s.parse("Oz~")).toEqual("Õ")
        expect(s.parse("OZ~")).toEqual("Õ")
        expect(s.parse("oz~")).toEqual("õ")
        expect(s.parse("oZ~")).toEqual("õ")
        expect(s.parse("Uz~")).toEqual("Ũ")
        expect(s.parse("UZ~")).toEqual("Ũ")
        expect(s.parse("uz~")).toEqual("ũ")
        expect(s.parse("uZ~")).toEqual("ũ")
    })

    it('should not parse anything here', () => {
        let s = new Santale();

        expect(s.parse('hello')).toEqual('hello')
    })

    it('should be able to convert a line', () => {
        let s = new Santale();

        let testTable: any = {
            "inz'akz' nz'utum do Lenin kana": "ińak̓ ńutum do Lenin kana",
            "Haz.~s ar raz.skaz. reakz',": "Hạ̃s ar rạskạ reak̓,",
            "Bhor ar banz'caokz' reakz'": "Bhor ar bańcaok̓ reak̓",
            "Az.dz.itetz'genz' raz.skaz.kz' kana": "Ạḍitet̓geń rạskạk̓ kana",
        };

        Object.keys(testTable).forEach(input => {
            let output = testTable[input]
            expect(s.parse(input)).toEqual(output);
        });
    })
});

