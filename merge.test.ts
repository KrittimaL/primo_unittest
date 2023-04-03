import merge from "./merge";

describe('merge', () => {
    it('merge two sorted arrays into one sorted array', () => {
        const collection1: number[] = [1, 3, 5];
        const collection2: number[] = [2, 4, 6];
        const expected: number[] = [1, 2, 3, 4, 5, 6];

        const result: number[] = merge(collection1, collection2);

        expect(result).toEqual(expected);
    });

    it('an empty array', () => {
        const collection1: number[] = [];
        const collection2: number[] = [1, 2, 3];
        const expected: number[] = [1, 2, 3];

        const result: number[] = merge(collection1, collection2);

        expect(result).toEqual(expected);
    });

    it('empty arrays', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const expected: number[] = [];

        const result: number[] = merge(collection1, collection2);

        expect(result).toEqual(expected);
    });

    it('arrays with different lengths', () => {
        const collection1: number[] = [1, 3, 5, 7, 9];
        const collection2: number[] = [2, 4, 6];
        const expected: number[] = [1, 2, 3, 4, 5, 6, 7, 9];

        const result: number[] = merge(collection1, collection2);

        expect(result).toEqual(expected);
    });

    it('overlapping elements', () => {
        const collection1: number[] = [1, 3, 4];
        const collection2: number[] = [2, 4, 6];
        const expected: number[] = [1, 2, 3, 4, 4, 6];

        const result: number[] = merge(collection1, collection2);

        expect(result).toEqual(expected);
    });

});