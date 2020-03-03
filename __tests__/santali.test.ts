import SantaliParser from '../src/santali'
import 'jest'

describe('Santali', () => {
    it('should be able to convert all the characters to santali', () => {
        let s = new SantaliParser();
        expect(s.parse("A.")).toEqual("Ạ")
        expect(s.parse("A.")).toEqual("Ạ")
        expect(s.parse("a.")).toEqual("ạ")
        expect(s.parse("a.")).toEqual("ạ")
        expect(s.parse("C'")).toEqual("C̓")
        expect(s.parse("C'")).toEqual("C̓")
        expect(s.parse("c'")).toEqual("c̓")
        expect(s.parse("c'")).toEqual("c̓")
        expect(s.parse("D.")).toEqual("Ḍ")
        expect(s.parse("D.")).toEqual("Ḍ")
        expect(s.parse("d.")).toEqual("ḍ")
        expect(s.parse("d.")).toEqual("ḍ")
        expect(s.parse("K'")).toEqual("K̓")
        expect(s.parse("K'")).toEqual("K̓")
        expect(s.parse("k'")).toEqual("k̓")
        expect(s.parse("k'")).toEqual("k̓")
        expect(s.parse("N'")).toEqual("Ń")
        expect(s.parse("N'")).toEqual("Ń")
        expect(s.parse("n'")).toEqual("ń")
        expect(s.parse("n'")).toEqual("ń")
        expect(s.parse("P'")).toEqual("P̓")
        expect(s.parse("P'")).toEqual("P̓")
        expect(s.parse("p'")).toEqual("p̓")
        expect(s.parse("p'")).toEqual("p̓")
        expect(s.parse("R.")).toEqual("Ṛ")
        expect(s.parse("R.")).toEqual("Ṛ")
        expect(s.parse("r.")).toEqual("ṛ")
        expect(s.parse("r.")).toEqual("ṛ")
        expect(s.parse("T'")).toEqual("T̓")
        expect(s.parse("T'")).toEqual("T̓")
        expect(s.parse("t'")).toEqual("t̓")
        expect(s.parse("t'")).toEqual("t̓")
        expect(s.parse("T.")).toEqual("Ṭ")
        expect(s.parse("T.")).toEqual("Ṭ")
        expect(s.parse("t.")).toEqual("ṭ")
        expect(s.parse("t.")).toEqual("ṭ")
        expect(s.parse("A~")).toEqual("Ã")
        expect(s.parse("A~")).toEqual("Ã")
        expect(s.parse("a~")).toEqual("ã")
        expect(s.parse("a~")).toEqual("ã")
        expect(s.parse("A.~")).toEqual("Ạ̃")
        expect(s.parse("A.~")).toEqual("Ạ̃")
        expect(s.parse("A~.")).toEqual("Ạ̃")
        expect(s.parse("A~.")).toEqual("Ạ̃")
        expect(s.parse("a.~")).toEqual("ạ̃")
        expect(s.parse("a.~")).toEqual("ạ̃")
        expect(s.parse("a~.")).toEqual("ạ̃")
        expect(s.parse("a~.")).toEqual("ạ̃")
        expect(s.parse("E~")).toEqual("Ẽ")
        expect(s.parse("E~")).toEqual("Ẽ")
        expect(s.parse("e~")).toEqual("ẽ")
        expect(s.parse("e~")).toEqual("ẽ")
        expect(s.parse("I~")).toEqual("Ĩ")
        expect(s.parse("I~")).toEqual("Ĩ")
        expect(s.parse("i~")).toEqual("ĩ")
        expect(s.parse("i~")).toEqual("ĩ")
        expect(s.parse("O~")).toEqual("Õ")
        expect(s.parse("O~")).toEqual("Õ")
        expect(s.parse("o~")).toEqual("õ")
        expect(s.parse("o~")).toEqual("õ")
        expect(s.parse("U~")).toEqual("Ũ")
        expect(s.parse("U~")).toEqual("Ũ")
        expect(s.parse("u~")).toEqual("ũ")
        expect(s.parse("u~")).toEqual("ũ")
    })

    it('should not parse anything here', () => {
        let s = new SantaliParser();

        expect(s.parse('hello')).toEqual('hello')
    })

    it('should be able to convert a line', () => {
        let s = new SantaliParser();

        let testTable: any = {
            "in'ak' n'utum do Lenin kana": "ińak̓ ńutum do Lenin kana",
            "Ha.~s ar ra.ska. reak',": "Hạ̃s ar rạskạ reak̓,",
            "Bhor ar ban'caok' reak'": "Bhor ar bańcaok̓ reak̓",
            "A.d.itet'gen' ra.ska.k' kana": "Ạḍitet̓geń rạskạk̓ kana",
        };

        Object.keys(testTable).forEach(input => {
            let output = testTable[input]
            expect(s.parse(input)).toEqual(output);
        });
    })
});

