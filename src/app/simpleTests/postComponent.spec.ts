import { PostComponent } from './postComponent';

describe('Should count likes', () => {

    // Arrange
    const likes = 0;
    const component = new PostComponent();

    // Act
    component.like();

    // Assert
    expect(component.likes).toEqual(1);


});
