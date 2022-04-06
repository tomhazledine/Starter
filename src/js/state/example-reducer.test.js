import { exampleReducer } from "./example-reducer";

describe("Example reducer", () => {
    it("INCREMENT", () => {
        const statingState = { value: 0 };
        expect(statingState.value).toBe(0);

        const result = exampleReducer(statingState, {
            type: "INCREMENT"
        });
        expect(result.value).toBe(1);
    });
});
