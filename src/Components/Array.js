const figures = [
  {
    type: "Pawn",
    color: "white",
    square: "a2",
    isSelected: false,
    isDead: false,
    component: (color, selected) => (
      <Pawn
        color={color}
        selected={selected}
        onClick={() => {
          selectFigure("a2");
        }}
      />
    ),
  },
  // {
  //   type: "Pawn",
  //   color: "white",
  //   square: "b2",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "white",
  //   square: "c2",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "white",
  //   square: "d2",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "white",
  //   square: "e2",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "white",
  //   square: "f2",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "white",
  //   square: "g2",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "white",
  //   square: "h2",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "black",
  //   square: "a7",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "black",
  //   square: "b7",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "black",
  //   square: "c7",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "black",
  //   square: "d7",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "black",
  //   square: "e7",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "black",
  //   square: "f7",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "black",
  //   square: "g7",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Pawn",
  //   color: "black",
  //   square: "h7",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Pawn color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Rook",
  //   color: "white",
  //   square: "a1",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Rook color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Rook",
  //   color: "white",
  //   square: "h1",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Rook color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Rook",
  //   color: "black",
  //   square: "a8",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Rook color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Rook",
  //   color: "black",
  //   square: "h8",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Rook color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Knight",
  //   color: "white",
  //   square: "b1",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Knight color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Knight",
  //   color: "white",
  //   square: "g1",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Knight color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Knight",
  //   color: "black",
  //   square: "b8",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Knight color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Knight",
  //   color: "black",
  //   square: "g8",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Knight color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Bishop",
  //   color: "white",
  //   square: "c1",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Bishop color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Bishop",
  //   color: "white",
  //   square: "f1",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Bishop color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Bishop",
  //   color: "black",
  //   square: "c8",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Bishop color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Bishop",
  //   color: "black",
  //   square: "f8",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Bishop color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Queen",
  //   color: "white",
  //   square: "d1",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Queen color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "Queen",
  //   color: "black",
  //   square: "d8",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <Queen color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "King",
  //   color: "white",
  //   square: "e1",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <King color={color} selected={selected} />
  //   ),
  // },
  // {
  //   type: "King",
  //   color: "black",
  //   square: "e8",
  //   isSelected: false,
  //   isDead: false,
  //   component: (color, selected) => (
  //     <King color={color} selected={selected} />
  //   ),
  // },
];
