/**
 * This file is licensed under the GNU GPLv3 License
 * For more information, see: https://www.gnu.org/licenses/gpl-3.0.en.html
 */

"use strict";

class float16 {
};

class float32 extends primitive { // 7
    public static readonly MAX_VALUE: float32 = new float32((3.4**38));
    public static readonly MIN_VALUE: float32 = new float32(((-3.4)**38));

    constructor(value: number) {
        if (value > float32.MAX_VALUE.value) {
            value = float32.MAX_VALUE.value;
            console.warn("float32 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (value < float32.MIN_VALUE.value) {
            value = float32.MIN_VALUE.value;
            console.warn("float32 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
        super(value);
        this.updateCheck();
    }

    toString(): string {
        this.updateCheck();
        return this.value.toString();
    }

    plus(obj: primitive | number): float32 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float32(this.value + obj.toNumber());
        } else {
            return new float32(this.value + obj);
        }
    }

    plusEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value += obj.toNumber();
        } else {
            this.value += obj;
        }
        this.updateCheck();
    }

    minus(obj: primitive | number): float32 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float32(this.value - obj.toNumber());
        } else {
            return new float32(this.value - obj);
        }
    }

    minusEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value -= obj.toNumber();
        } else {
            this.value -= obj;
        }
        this.updateCheck();
    }

    multiply(obj: primitive | number): float32 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float32(this.value * obj.toNumber());
        } else {
            return new float32(this.value * obj);
        }
    }

    multiplyEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value *= obj.toNumber();
        } else {
            this.value *= obj;
        }
        this.updateCheck();
    }

    divide(obj: primitive | number): float32 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float32(this.value / obj.toNumber());
        } else {
            return new float32(this.value / obj);
        }
    }

    divideEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value /= obj.toNumber();
        } else {
            this.value /= obj;
        }
        this.updateCheck();
    }

    mod(obj: primitive | number): float32 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float32(this.value % obj.toNumber());
        } else {
            return new float32(this.value % obj);
        }
    }

    modEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value %= obj.toNumber();
        } else {
            this.value %= obj;
        }
        this.updateCheck();
    }

    protected updateCheck(): void {
        if (this.value > float32.MAX_VALUE.value) {
            this.value = float32.MAX_VALUE.value;
            console.warn("float32 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (this.value < float32.MIN_VALUE.value) {
            this.value = float32.MIN_VALUE.value;
            console.warn("float32 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
        let str: string = this.toString();
        try {
            let index: number = str.substring(str.indexOf("." + 1)).length;
            let processed: string = "";
            let count: number = 0;
            if (index > 7) {
                for (let i: number = 0; i < str.length; ++i) {
                    let c: string = str.charAt(i);
                    if (i > index && count !== 7) {
                        processed += c;
                        ++count;
                    } else { processed += c; }
                }
                console.warn("float32 cannot surpass precision level 7");
            }
            this.value = parseFloat(processed);
        } catch (err: any) { console.log(err.toString()); }
    }
};

class float64 extends primitive { // 15
    public static readonly MAX_VALUE: float64 = new float64((1.7**308));
    public static readonly MIN_VALUE: float64 = new float64(((-1.7)**308));

    constructor(value: number) {
        super(value);
    }

    toString(): string {
        this.updateCheck();
        return this.value.toString();
    }

    plus(obj: primitive | number): float64 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float64(this.value + obj.toNumber());
        } else {
            return new float64(this.value + obj);
        }
    }

    plusEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value += obj.toNumber();
        } else {
            this.value += obj;
        }
        this.updateCheck();
    }

    minus(obj: primitive | number): float64 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float64(this.value - obj.toNumber());
        } else {
            return new float64(this.value - obj);
        }
    }

    minusEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value -= obj.toNumber();
        } else {
            this.value -= obj;
        }
        this.updateCheck();
    }

    multiply(obj: primitive | number): float64 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float64(this.value * obj.toNumber());
        } else {
            return new float64(this.value * obj);
        }
    }

    multiplyEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value *= obj.toNumber();
        } else {
            this.value *= obj;
        }
        this.updateCheck();
    }

    divide(obj: primitive | number): float64 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float64(this.value / obj.toNumber());
        } else {
            return new float64(this.value / obj);
        }
    }

    divideEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value /= obj.toNumber();
        } else {
            this.value /= obj;
        }
        this.updateCheck();
    }

    mod(obj: primitive | number): float64 {
        this.updateCheck();
        if (obj instanceof primitive) {
            return new float64(this.value % obj.toNumber());
        } else {
            return new float64(this.value % obj);
        }
    }

    modEquals(obj: primitive | number): void {
        this.updateCheck();
        if (obj instanceof primitive) {
            this.value %= obj.toNumber();
        } else {
            this.value %= obj;
        }
        this.updateCheck();
    }

    protected updateCheck(): void {
        if (this.value > float64.MAX_VALUE.value) {
            this.value = float64.MAX_VALUE.value;
            console.warn("float64 cannot surpass MAX_VALUE; converting to MAX_VALUE");
        } else if (this.value < float64.MIN_VALUE.value) {
            this.value = float64.MIN_VALUE.value;
            console.warn("float64 cannot surpass MIN_VALUE; converting to MIN_VALUE");
        }
        let str: string = this.toString();
        try {
            let index: number = str.substring(str.indexOf("." + 1)).length;
            let processed: string = "";
            let count: number = 0;
            if (index > 15) {
                for (let i: number = 0; i < str.length; ++i) {
                    let c: string = str.charAt(i);
                    if (i > index && count !== 15) {
                        processed += c;
                        ++count;
                    } else { processed += c; }
                }
                console.warn("float32 cannot surpass precision level 7");
            }
            this.value = parseFloat(processed);
        } catch (err) { console.log(err.toString()); }
    }
};

class float128 {
};