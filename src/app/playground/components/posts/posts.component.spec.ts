import {PostsComponent} from './posts.component';
import {PostsService} from './posts.service';
import {EMPTY, of, throwError} from 'rxjs';

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    service = new PostsService(null)
    component = new PostsComponent(service)
  })

  it('should update posts length after ngOnInit', () => {
    const posts = [1, 2, 3, 4, 5]
    spyOn(service, 'fetch').and.returnValue(of(posts))

    component.ngOnInit()

    expect(component.posts.length).toBe(posts.length)
  })

  it('should add new post', () => {
    const post = {title: 'msg'}
    const spy = spyOn(service, 'create').and.returnValue(of(post))

    component.add(post.title)

    expect(spy).toHaveBeenCalled()
    expect(component.posts.includes(post)).toBeTruthy()
  })

  it('should error', () => {
    const err = 'Error msg'
    spyOn(service, 'create').and.returnValue(throwError(err))

    component.add('Post title')

    expect(component.message).toBe(err)
  });

})
