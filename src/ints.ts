"use strict";

class int16 extends primitive {
    public static readonly MAX_VALUE: int16 = new int16(32_767);
    public static readonly MIN_VALUE: int16 = new int16(-32_768);

    constructor(value: number) {
        if (value > int16.MAX_VALUE.value) {
            value = int16.MAX_VALUE.value;
            console.warn("int16 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (value < int16.MIN_VALUE.value) {
            value = int16.MIN_VALUE.value;
            console.warn("int16 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
        super(value);
    }

    toString(): string {
        let str: string = "";
        for (let i: number = 0; i < this.value.toString().length; ++i) {
            let c: string = this.value.toString().charAt(i);
            if (c === ".") break;
            str += c;
        }
        return str;
    }

    plus(obj: primitive | number): int16 {
        if (obj instanceof primitive) {
            return new int16(this.value + obj.toNumber());
        } else {
            return new int16(this.value + obj);
        }
    }

    plusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value += obj.toNumber();
        } else {
            this.value += obj;
        }
        this.updateCheck();
    }

    minus(obj: primitive | number): int16 {
        if (obj instanceof primitive) {
            return new int16(this.value - obj.toNumber());
        } else {
            return new int16(this.value - obj);
        }
    }

    minusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value -= obj.toNumber();
        } else {
            this.value -= obj;
        }
        this.updateCheck();
    }

    multiply(obj: primitive | number): int16 {
        if (obj instanceof primitive) {
            return new int16(this.value * obj.toNumber());
        } else {
            return new int16(this.value * obj);
        }
    }

    multiplyEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value *= obj.toNumber();
        } else {
            this.value *= obj;
        }
        this.updateCheck();
    }

    divide(obj: primitive | number): int16 {
        if (obj instanceof primitive) {
            return new int16(this.value / obj.toNumber());
        } else {
            return new int16(this.value / obj);
        }
    }

    divideEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value /= obj.toNumber();
        } else {
            this.value /= obj;
        }
        this.updateCheck();
    }

    mod(obj: primitive | number): int16 {
        if (obj instanceof primitive) {
            return new int16(this.value % obj.toNumber());
        } else {
            return new int16(this.value % obj);
        }
    }

    modEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value %= obj.toNumber();
        } else {
            this.value %= obj;
        }
        this.updateCheck();
    }

    protected updateCheck(): void {
        if (this.value > int16.MAX_VALUE.value) {
            this.value = int16.MAX_VALUE.value;
            console.warn("int16 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (this.value < int16.MIN_VALUE.value) {
            this.value = int16.MIN_VALUE.value;
            console.warn("int16 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
    } 
};

class int32 extends primitive {
    public static readonly MAX_VALUE: int32 = new int32(2_147_483_647);
    public static readonly MIN_VALUE: int32 = new int32(-2_147_483_648);

    constructor(value: number) {
        if (value > int32.MAX_VALUE.value) {
            value = int32.MAX_VALUE.value;
            console.warn("int32 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (value < int32.MIN_VALUE.value) {
            value = int32.MIN_VALUE.value;
            console.warn("int32 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
        super(value);
    }

    toString(): string {
        let str: string = "";
        for (let i: number = 0; i < this.value.toString().length; ++i) {
            let c: string = this.value.toString().charAt(i);
            if (c === ".") break;
            str += c;
        }
        return str;
    }

    plus(obj: primitive | number): int32 {
        if (obj instanceof primitive) {
            return new int32(this.value + obj.toNumber());
        } else {
            return new int32(this.value + obj);
        }
    }

    plusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value += obj.toNumber();
        } else {
            this.value += obj;
        }
        this.updateCheck();
    }

    minus(obj: primitive | number): int32 {
        if (obj instanceof primitive) {
            return new int32(this.value - obj.toNumber());
        } else {
            return new int32(this.value - obj);
        }
    }

    minusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value -= obj.toNumber();
        } else {
            this.value -= obj;
        }
        this.updateCheck();
    }

    multiply(obj: primitive | number): int32 {
        if (obj instanceof primitive) {
            return new int32(this.value * obj.toNumber());
        } else {
            return new int32(this.value * obj);
        }
    }

    multiplyEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value *= obj.toNumber();
        } else {
            this.value *= obj;
        }
        this.updateCheck();
    }

    divide(obj: primitive | number): int32 {
        if (obj instanceof primitive) {
            return new int32(this.value / obj.toNumber());
        } else {
            return new int32(this.value / obj);
        }
    }

    divideEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value /= obj.toNumber();
        } else {
            this.value /= obj;
        }
        this.updateCheck();
    }

    mod(obj: primitive | number): int32 {
        if (obj instanceof primitive) {
            return new int32(this.value % obj.toNumber());
        } else {
            return new int32(this.value % obj);
        }
    }

    modEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value %= obj.toNumber();
        } else {
            this.value %= obj;
        }
        this.updateCheck();
    }

    protected updateCheck(): void {
        if (this.value > int32.MAX_VALUE.value) {
            this.value = int32.MAX_VALUE.value;
            console.warn("int32 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (this.value < int32.MIN_VALUE.value) {
            this.value = int32.MIN_VALUE.value;
            console.warn("int32 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
    }
};

class int64 extends primitive {
    public static readonly MAX_VALUE: int64 = new int64(9_223_372_036_854_775_807);
    public static readonly MIN_VALUE: int64 = new int64(-9_223_372_036_854_775_808);

    constructor(value: number) {
        if (value > int64.MAX_VALUE.value) {
            value = int64.MAX_VALUE.value;
            console.warn("int64 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (value < int64.MIN_VALUE.value) {
            value = int64.MIN_VALUE.value;
            console.warn("int64 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
        super(value);
    }

    toString(): string {
        let str: string = "";
        for (let i: number = 0; i < this.value.toString().length; ++i) {
            let c: string = this.value.toString().charAt(i);
            if (c === ".") break;
            str += c;
        }
        return str;
    }

    plus(obj: primitive | number): int64 {
        if (obj instanceof primitive) {
            return new int64(this.value + obj.toNumber());
        } else {
            return new int64(this.value + obj);
        }
    }

    plusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value += obj.toNumber();
        } else {
            this.value += obj;
        }
        this.updateCheck();
    }

    minus(obj: primitive | number): int64 {
        if (obj instanceof primitive) {
            return new int64(this.value - obj.toNumber());
        } else {
            return new int64(this.value - obj);
        }
    }

    minusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value -= obj.toNumber();
        } else {
            this.value -= obj;
        }
        this.updateCheck();
    }

    multiply(obj: primitive | number): int64 {
        if (obj instanceof primitive) {
            return new int64(this.value * obj.toNumber());
        } else {
            return new int64(this.value * obj);
        }
    }

    multiplyEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value *= obj.toNumber();
        } else {
            this.value *= obj;
        }
        this.updateCheck();
    }

    divide(obj: primitive | number): int64 {
        if (obj instanceof primitive) {
            return new int64(this.value / obj.toNumber());
        } else {
            return new int64(this.value / obj);
        }
    }

    divideEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value /= obj.toNumber();
        } else {
            this.value /= obj;
        }
        this.updateCheck();
    }

    mod(obj: primitive | number): int64 {
        if (obj instanceof primitive) {
            return new int64(this.value % obj.toNumber());
        } else {
            return new int64(this.value % obj);
        }
    }

    modEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value %= obj.toNumber();
        } else {
            this.value %= obj;
        }
        this.updateCheck();
    }

    protected updateCheck(): void {
        if (this.value > int64.MAX_VALUE.value) {
            this.value = int64.MAX_VALUE.value;
            console.warn("int64 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (this.value < int64.MIN_VALUE.value) {
            this.value = int64.MIN_VALUE.value;
            console.warn("int64 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
    }
};

class uint16 extends primitive {
    public static readonly MAX_VALUE: uint16 = new uint16(65_535);
    public static readonly MIN_VALUE: uint16 = new uint16(0);

    constructor(value: number) {
        if (value > uint16.MAX_VALUE.value) {
            value = uint16.MAX_VALUE.value;
            console.warn("uint16 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (value < uint16.MIN_VALUE.value) {
            value = uint16.MIN_VALUE.value;
            console.warn("uint16 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
        super(value);
    }

    toString(): string {
        let str: string = "";
        for (let i: number = 0; i < this.value.toString().length; ++i) {
            let c: string = "";
            if (c === ".") break;
            str += c;
        }
        return str;
    }

    plus(obj: primitive | number): uint16 {
        if (obj instanceof primitive) {
            return new uint16(this.value + obj.toNumber());
        } else {
            return new uint16(this.value + obj);
        }
    }

    plusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value += obj.toNumber();
        } else {
            this.value += obj;
        }
        this.updateCheck();
    }

    minus(obj: primitive | number): uint16 {
        if (obj instanceof primitive) {
            return new uint16(this.value - obj.toNumber());
        } else {
            return new uint16(this.value - obj);
        }
    }

    minusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value -= obj.toNumber();
        } else {
            this.value -= obj;
        }
        this.updateCheck();
    }

    multiply(obj: primitive | number): uint16 {
        if (obj instanceof primitive) {
            return new uint16(this.value * obj.toNumber());
        } else {
            return new uint16(this.value * obj);
        }
    }

    multiplyEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value *= obj.toNumber();
        } else {
            this.value *= obj;
        }
        this.updateCheck();
    }

    divide(obj: primitive | number): uint16 {
        if (obj instanceof primitive) {
            return new uint16(this.value / obj.toNumber());
        } else {
            return new uint16(this.value / obj);
        }
    }

    divideEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value /= obj.toNumber();
        } else {
            this.value /= obj;
        }
        this.updateCheck();
    }

    mod(obj: primitive | number): uint16 {
        if (obj instanceof primitive) {
            return new uint16(this.value % obj.toNumber());
        } else {
            return new uint16(this.value % obj);
        }
    }

    modEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value %= obj.toNumber();
        } else {
            this.value %= obj;
        }
        this.updateCheck();
    }

    protected updateCheck(): void {
        if (this.value > uint16.MAX_VALUE.value) {
            this.value = uint16.MAX_VALUE.value;
            console.warn("uint16 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (this.value < uint16.MIN_VALUE.value) {
            this.value = uint16.MIN_VALUE.value;
            console.warn("uint16 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
    }
}

class uint32 extends primitive {
    public static readonly MAX_VALUE: uint32 = new uint32(4_294_967_295);
    public static readonly MIN_VALUE: uint32 = new uint32(0);

    constructor(value: number) {
        if (value > uint32.MAX_VALUE.value) {
            value = uint32.MAX_VALUE.value;
            console.warn("uint32 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (value < uint32.MIN_VALUE.value) {
            value = uint32.MIN_VALUE.value;
            console.warn("uint32 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
        super(value);
    }

    toString(): string {
        let str: string = "";
        for (let i: number = 0; i < this.value.toString().length; ++i) {
            let c: string = this.value.toString().charAt(i);
            if (c === ".") break;
            str += c;
        }
        return str;
    }

    plus(obj: primitive | number): uint32 {
        if (obj instanceof primitive) {
            return new uint32(this.value + obj.toNumber());
        } else {
            return new uint32(this.value + obj);
        }
    }

    plusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value += obj.toNumber();
        } else {
            this.value += obj;
        }
        this.updateCheck();
    }

    minus(obj: primitive | number): uint32 {
        if (obj instanceof primitive) {
            return new uint32(this.value - obj.toNumber());
        } else {
            return new uint32(this.value - obj);
        }
    }

    minusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value -= obj.toNumber();
        } else {
            this.value -= obj;
        }
        this.updateCheck();
    }

    multiply(obj: primitive | number): uint32 {
        if (obj instanceof primitive) {
            return new uint32(this.value * obj.toNumber());
        } else {
            return new uint32(this.value * obj);
        }
    }

    multiplyEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value *= obj.toNumber();
        } else {
            this.value *= obj;
        }
        this.updateCheck();
    }

    divide(obj: primitive | number): uint32 {
        if (obj instanceof primitive) {
            return new uint32(this.value / obj.toNumber());
        } else {
            return new uint32(this.value / obj);
        }
    }

    divideEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value /= obj.toNumber();
        } else {
            this.value /= obj;
        }
        this.updateCheck();
    }

    mod(obj: primitive | number): uint32 {
        if (obj instanceof primitive) {
            return new uint32(this.value % obj.toNumber());
        } else {
            return new uint32(this.value % obj);
        }
    }

    modEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value %= obj.toNumber();
        } else {
            this.value %= obj;
        }
        this.updateCheck();
    }

    protected updateCheck(): void {
        if (this.value > uint32.MAX_VALUE.value) {
            this.value = uint32.MAX_VALUE.value;
            console.warn("uint32 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (this.value < uint32.MIN_VALUE.value) {
            this.value = uint32.MIN_VALUE.value;
            console.warn("uint32 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
    }
}


class uint64 extends primitive {
    public static readonly MAX_VALUE: uint64 = new uint64(18_446_744_073_709_551_615);
    public static readonly MIN_VALUE: uint64 = new uint64(0);

    constructor(value: number) {
        if (value > uint64.MAX_VALUE.value) {
            value = uint64.MAX_VALUE.value;
            console.warn("uint64 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (value < uint64.MIN_VALUE.value) {
            value = uint64.MIN_VALUE.value;
            console.warn("uint64 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
        super(value);
    }

    toString(): string {
        let str: string = "";
        for (let i: number = 0; i < this.value.toString().length; ++i) {
            let c: string = this.value.toString().charAt(i);
            if (c === ".") break;
            str += c;
        }
        return str;
    }

    plus(obj: primitive | number): uint64 { 
        if (obj instanceof primitive) {
            return new uint64(this.value + obj.toNumber());
        } else {
            return new uint64(this.value + obj);
        }
    }

    plusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value += obj.toNumber();
        } else {
            this.value += obj;
        }
        this.updateCheck();
    }

    minus(obj: primitive | number): uint64 { 
        if (obj instanceof primitive) {
            return new uint64(this.value - obj.toNumber());
        } else {
            return new uint64(this.value - obj);
        }
    }

    minusEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value -= obj.toNumber();
        } else {
            this.value -= obj;
        }
        this.updateCheck();
    }

    multiply(obj: primitive | number): uint64 { 
        if (obj instanceof primitive) {
            return new uint64(this.value * obj.toNumber());
        } else {
            return new uint64(this.value * obj);
        }
    }

    multiplyEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value *= obj.toNumber();
        } else {
            this.value *= obj;
        }
        this.updateCheck();
    }

    divide(obj: primitive | number): uint64 { 
        if (obj instanceof primitive) {
            return new uint64(this.value / obj.toNumber());
        } else {
            return new uint64(this.value / obj);
        }
    }

    divideEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value *= obj.toNumber();
        } else {
            this.value *= obj;
        }
        this.updateCheck();
    }

    mod(obj: primitive | number): uint64 { 
        if (obj instanceof primitive) {
            return new uint64(this.value % obj.toNumber());
        } else {
            return new uint64(this.value % obj);
        }
    }

    modEquals(obj: primitive | number): void {
        if (obj instanceof primitive) {
            this.value %= obj.toNumber();
        } else {
            this.value %= obj;
        }
        this.updateCheck();
    }

    protected updateCheck(): void {
        if (this.value > uint64.MAX_VALUE.value) {
            this.value = uint64.MAX_VALUE.value;
            console.warn("uint64 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (this.value < uint64.MIN_VALUE.value) {
            this.value = uint64.MIN_VALUE.value;
            console.warn("uint64 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
    }
}
