const createInt8TypedArray = (length, position, value) => {
        const buffer = new ArrayBuffer(length);
        const intArr = new IntArray(buffer, 0);
        if (position > length - 1) throw Error('Position outside range');

        intArr.setInt8(position, value);
        return intArr;
}
