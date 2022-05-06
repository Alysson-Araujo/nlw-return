import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailer-mail-adapter";
import { FeedBacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbacksUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedBacksRepository,
    private mailAdapter: NodemailerMailAdapter
  ) {}

  async execute(request: SubmitFeedbacksUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if(!type){
      throw new Error("type is required.")
    }

    if(!comment){
      throw new Error("comment is required.")
    }

    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error("Invalid screenshot format.")
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
    this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário do feedback: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
