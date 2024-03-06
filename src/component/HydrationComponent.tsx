"use client";
function HydrationComponent() {
  const a = Math.random();
  console.log(a);
  return <div>{a} this is the hydration Component</div>;
}

export default HydrationComponent;
