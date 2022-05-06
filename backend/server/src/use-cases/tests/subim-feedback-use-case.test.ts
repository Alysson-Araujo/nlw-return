import { SubmitFeedbackUseCase } from "../submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSPy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSPy }
  );

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {

    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,test.jpg ou algo aleatório",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSPy).toHaveBeenCalled();
  });

  

  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64,test.jpg ou algo aleatório",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,test.jpg ou algo aleatório",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback a invalid screenshot.", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "sdfsafasf2ef",
      })
    ).rejects.toThrow();
  });
});
