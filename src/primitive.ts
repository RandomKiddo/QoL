/**
 * This file is licensed under the GNU GPLv3 License
 * For more information, see: https://www.gnu.org/licenses/gpl-3.0.en.html
 */

"use strict";

abstract class primitive {
    protected value: number;

    constructor(value: number) {
        this.value = value;
    }

    abstract toString(): string;
    abstract plus(obj: primitive | number): primitive;
    abstract plusEquals(obj: primitive | number): void;
    abstract minus(obj: primitive | number): primitive;
    abstract minusEquals(obj: primitive | number): void;
    abstract multiply(obj: primitive | number): primitive;
    abstract multiplyEquals(obj: primitive | number): void;
    abstract divide(obj: primitive | number): primitive;
    abstract divideEquals(obj: primitive | number): void;
    abstract mod(obj: primitive | number): primitive;
    abstract modEquals(obj: primitive | number): void;
    protected abstract updateCheck(): void;
    
    toNumber(): number {
        return this.value;
    }

    greaterThan(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value > obj.toNumber();
        } else {
            return this.value > obj;
        }
    }

    greaterThanOrEqual(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value >= obj.toNumber();
        } else {
            return this.value >= obj;
        }
    }

    lessThan(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value < obj.toNumber();
        } else {
            return this.value < obj;
        }
    }

    lessThanOrEqual(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value <= obj.toNumber();
        } else {
            return this.value <= obj;
        }
    }

    equals(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value.toString() === obj.toString();
        } else {
            return this.value === obj;
        }
    }

    not(): boolean {
        if (this.value === null || isNaN(this.value)) {
            return true;
        }
        return false;
    }
};