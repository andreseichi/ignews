import { render, screen } from "@testing-library/react";
import Posts, { getStaticProps } from "../../pages/posts";
import { getPrismicClient } from "../../services/prismic";

jest.mock("../../services/prismic");

const posts = [
  {
    slug: "new-post",
    title: "New Post",
    excerpt: "Post excerpt",
    updatedAt: "December, 08",
  },
];

describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("New Post")).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const getPrismicClientMocked = jest.mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: "new-post",
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
          },
        ],
      }),
    } as any);

    const response = await getStaticProps({} as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: "new-post",
              title: "New Post",
              excerpt: "Post excerpt",
              updatedAt: "08 de dezembro de 2022",
            },
          ],
        },
      })
    );
  });
});
