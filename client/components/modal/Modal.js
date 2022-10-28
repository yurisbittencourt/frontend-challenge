import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Modal({ setIsOpen, setNewArticle }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = () => {
    setNewArticle({
      title: title,
      description: description,
      url: url,
      imgUrl: imgUrl,
    });
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  };
  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <Background>
      <Container>
        <Title>Post a new article</Title>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Input
          placeholder="Article URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <Input
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
        <Row>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </Row>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.form`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border: none;
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  font-size: 1rem;
  &:focus {
    outline: none;
    border-bottom: 3px solid ${({ theme }) => theme.colors.line};
  }
  &::placeholder {
    font-size: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto 0;
`;

const Button = styled.button`
  width: 140px;
  height: 36px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  border: 0.5px solid ${({ theme }) => theme.colors.buttonBorder};
  font-size: 0.6rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.buttonBackground};
  box-shadow: ${({ theme }) => theme.colors.buttonShadow} 0px 2px 16px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHoverBackground};
  }
`;
