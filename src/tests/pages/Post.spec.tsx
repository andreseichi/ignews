import { render, screen } from "@testing-library/react";
import { getSession } from "next-auth/client";
import Post, { getServerSideProps } from "../../pages/posts/[slug]";
import { getPrismicClient } from "../../services/prismic";

jest.mock("../../services/prismic");
jest.mock("next-auth/client");

const post = {
  slug: "new-post",
  title: "New Post",
  content: "<p>Post excerpt</p>",
  updatedAt: "December, 08",
};

describe("Post page", () => {
  it("renders correctly", () => {
    render(<Post post={post} />);

    expect(screen.getByText("New Post")).toBeInTheDocument();
    expect(screen.getByText("Post excerpt")).toBeInTheDocument();
  });

  it("redirects users if no subscription is found", async () => {
    const getSessionMocked = jest.mocked(getSession);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: null,
    });

    const response = await getServerSideProps({
      params: {
        slug: "new-post",
      },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: "/",
        }),
      })
    );
  });

  it("loads initial data", async () => {
    const getSessionMocked = jest.mocked(getSession);
    const getPrismicClientMocked = jest.mocked(getPrismicClient);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: "fake-active-subscription",
    } as any);
    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            {
              type: "heading",
              text: "New Post",
            },
          ],
          content: [
            {
              type: "paragraph",
              text: "Post excerpt",
            },
          ],
        },
        last_publication_date: "12-08-2022",
      }),
    } as any);

    const response = await getServerSideProps({
      params: {
        slug: "new-post",
      },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: "new-post",
            title: "New Post",
            content: "<p>Post excerpt</p>",
            updatedAt: "08 de dezembro de 2022",
          },
        },
      })
    );
  });
});
