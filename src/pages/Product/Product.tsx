import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useData } from "@hooks";
import {
  formatPriceToBRL,
  formatNumberToKilometer,
  gotToTop,
  isObjectEmpty,
} from "@utils";
import { Button, Title, UserIcon, Comment, TextArea, Badge } from "@components";
import { GalleryPhoto, Binds } from "./partials";
import { useState } from "react";

const commentBadges = [
  "Gostei muito!",
  "Incrível!",
  "Recomendarei para meus amigos!",
];

export const Product = () => {
  const { user, product, comment, bind } = useData();

  const comments = [comment, comment, comment, comment, comment];

  const binds = [bind, bind, bind, bind, bind];

  const navigate = useNavigate();

  const [isBindShown, setIsBindShown] = useState<boolean>(false);

  const [userComment, setUserComment] = useState<string>("");

  const handleSubmitComment = () => console.log(userComment);

  return (
    <div className="relative before:absolute before:bg-brand-1 before:top-0 before:left-0 before:right-0 before:h-129">
      <section className="relative lg:grid lg:grid-cols-12 px-4 lg:px-[8%] pt-11 lg:gap-x-11">
        <div className="lg:col-span-7">
          <div className="bg-grey-10 rounded px-7 pt-7 pb-14">
            <img
              className="rounded w-full"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="bg-grey-10 rounded mt-5 p-7">
            <Title
              className="mb-9 text-grey-1"
              level={2}
              size="xl"
              weight="semibold"
            >
              {product.title}
            </Title>
            <div className="flex flex-col gap-y-9">
              <div className="flex gap-3">
                <Badge>{product.year}</Badge>
                <Badge formatter={formatNumberToKilometer}>
                  {product.mileage}
                </Badge>
              </div>
              <strong className="text-grey-1">
                {formatPriceToBRL(product.price)}
              </strong>
            </div>
            <Button
              type="button"
              className="w-fit mt-6"
              variant={isBindShown ? "negative" : "brand"}
              size="medium"
              onClick={() => setIsBindShown(!isBindShown)}
            >
              {isBindShown ? "Cancelar" : "Comprar"}
            </Button>
            <AnimatePresence>
              {isBindShown && (
                <motion.div
                  className="mt-6"
                  initial={{ height: 0, overflow: "hidden" }}
                  animate={{ height: "auto", overflow: "hidden" }}
                  exit={{ height: 0, overflow: "hidden" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Binds binds={binds} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="bg-grey-10 rounded mt-5 p-7">
            <Title
              className="mb-8 text-grey-1"
              level={2}
              size="xl"
              weight="semibold"
            >
              Descrição
            </Title>
            <p className="text-base text-grey-2 leading-7">
              {product.description}
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-grey-10 rounded mt-5 lg:mt-0 p-7">
            <Title
              className="mb-8 text-grey-1"
              level={2}
              size="xl"
              weight="semibold"
            >
              Fotos
            </Title>
            <ul className="grid place-items-center grid-cols-3 grid-rows-2 gap-x-2 gap-y-12">
              {product.gallery.map((imageURL, index) => (
                <GalleryPhoto
                  key={index}
                  imageURL={imageURL}
                  productTitle={product.title}
                />
              ))}
            </ul>
          </div>
          <div className="bg-grey-10 rounded mt-5 lg:mt-9 px-7 py-10">
            <div className="flex flex-col items-center gap-y-7">
              <UserIcon user={user} size="medium" />
              <Title
                className="text-grey-1"
                level={2}
                size="xl"
                weight="semibold"
              >
                {user.name}
              </Title>
            </div>
            <p
              className="text-base leading-7 line-clamp-3 text-grey-2 h-30 mt-7"
              title={user.description}
            >
              {user.description}
            </p>
            <Button
              className="block w-fit mx-auto mt-7"
              type="button"
              variant="default"
              size="medium"
            >
              Ver todos anúncios
            </Button>
          </div>
        </div>
      </section>
      <section className="lg:grid lg:grid-cols-12 lg:grid-flow-row lg:auto-rows-auto px-4 lg:px-[8%] mt-11 lg:mt-4 pb-11 lg:pb-16 lg:gap-x-11">
        <div className="lg:col-span-7 bg-grey-10 rounded px-7 py-9">
          <Title className="text-grey-1 mb-6" level={2} size="xl" weight="bold">
            Comentários
          </Title>
          <ul className="flex flex-col gap-y-11">
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 bg-grey-10 rounded mt-11 lg:mt-8 px-7 py-9">
          <div className="flex items-center gap-x-2">
            <UserIcon user={user} size="small" />
            <Title className="text-grey-1" level={2} size="sm" weight="medium">
              {user.name}
            </Title>
          </div>
          <div className="lg:relative">
            <TextArea
              className="h-32 mt-6"
              value={userComment}
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              onChange={(e) => setUserComment(e.currentTarget.value)}
            />
            <Button
              className="lg:absolute right-3 bottom-3 w-fit mt-6 lg:mt-0"
              variant={isObjectEmpty(user) ? "negative" : "brand"}
              size="medium"
              onClick={
                isObjectEmpty(user)
                  ? () => {
                      toast.info(
                        "Apenas usuários conectados podem fazer comentários, por favor faça o login."
                      );
                      navigate("/login", { preventScrollReset: false });
                      gotToTop();
                    }
                  : () => handleSubmitComment()
              }
            >
              Comentar
            </Button>
          </div>
          <ul className="flex flex-wrap mt-6 gap-x-2 gap-y-6">
            {commentBadges.map((text, index) => (
              <li key={index} className="flex-none">
                <Badge
                  as="button"
                  variant="comment"
                  value={text}
                  onClick={(e) => setUserComment(e.currentTarget.value)}
                >
                  {text}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
