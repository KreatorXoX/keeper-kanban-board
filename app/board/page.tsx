import React from "react";
import KanbanBoard from "../components/kanban-board/KanbanBoard";
import Container from "../components/Container";

export default function BoardPage() {
  return (
    <Container>
      <KanbanBoard />
    </Container>
  );
}
