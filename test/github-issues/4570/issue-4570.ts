import "reflect-metadata";

import {expect} from "chai";
import {ColumnOptions, PrimaryColumn} from "../../../src";

describe("github issues > #4570 Fix PrimaryColumn decorator modifies passed option", () => {
    it("should not modify passed options to PrimaryColumn", () => {
        const options: ColumnOptions = {type: "varchar" };
        const clone = Object.assign({}, options);

        class Entity {
            @PrimaryColumn(options)
            pkey: string;
        }

        expect(Entity).to.be;
        expect(clone).to.be.eql(options);
    });
});
