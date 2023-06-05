const One = Two => (Props) => Two * Props;
console.log(One(3)(4));

// consider One is a HOC who is taking Two Component as a parameter and returns TWO component with enhanced
// features.

