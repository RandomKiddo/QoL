/**
 * This file is licensed under the GNU GPLv3 License
 * For more information, see: https://www.gnu.org/licenses/gpl-3.0.en.html
 */

"use strict";

/**
 * represents a primitive data type of which other types are created on
 * the class is abstract, and cannot be instantiated
 */
abstract class primitive {
    protected value: number;

    /**
     * @param value The value to instantiate to
     * Parent constructor to all primitives
     */
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
    
    /**
     * @return This primitive in number form
     * Tranforms this primitive into a number
     */
    toNumber(): number {
        return this.value;
    }

    /**
     * @param obj The object to check
     * @return A boolean representing the inequality
     * Checks if this primitive is greater than the other
     */
    greaterThan(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value > obj.toNumber();
        } else {
            return this.value > obj;
        }
    }

    /**
     * @param obj The object to check
     * @return A boolean representing the inequality
     * Checks if this primitive is greater than or equal to the other
     */
    greaterThanOrEqual(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value >= obj.toNumber();
        } else {
            return this.value >= obj;
        }
    }

    /**
     * @param obj The object to check
     * @return A boolean representing the inequality
     * Checks if this primitive is less than the other
     */
    lessThan(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value < obj.toNumber();
        } else {
            return this.value < obj;
        }
    }

    /**
     * @param obj The object to check
     * @return A boolean representing the inequality
     * Checks if this primitive is less than or equal to the other
     */
    lessThanOrEqual(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value <= obj.toNumber();
        } else {
            return this.value <= obj;
        }
    }

    /**
     * @param obj The object to check
     * @return A boolean representing the inequality
     * Checks if this primitive is equal to the other
     */
    equals(obj: primitive | number): boolean {
        if (obj instanceof primitive) {
            return this.value.toString() === obj.toString();
        } else {
            return this.value === obj;
        }
    }

    /**
     * @return A boolean representing the not
     * Returns true if this primitive is null or NaN
     */
    not(): boolean {
        if (this.value === null || isNaN(this.value)) {
            return true;
        }
        return false;
    }
};