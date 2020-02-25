export class PostComponent {

    public likes: number;

    public like(): void {
        this.likes++;
    }

    public deslike(): void {
        if (this.likes) {
            this.likes--;
        }
    }

}