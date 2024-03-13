import React from "react";

interface Props {
  joke: {
    id: string;
    value: string;
    url: string;
    updated_at: string;
  };
}

export const JokeCard = ({
  joke,
  size,
}: Props & { size: "large" | "small" }): JSX.Element => {
  const datePart = joke.updated_at.split(" ")[0];
  const dateParts = datePart.split("-");
  const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;

  return (
    <a
      href={joke.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`joke-card ${size}`}
    >
      <p>{joke.value}</p>
      <div className={`joke-footer ${size}`}>
        <span>{joke.id}</span>
        <span>{formattedDate}</span>
      </div>
    </a>
  );
};

export default JokeCard;
