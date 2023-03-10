import {Action, Selector, State, StateContext} from '@ngxs/store';
import {CheckHealth, EmailActionSend} from 'src/store/email/email.actions';
import {EmailService} from 'src/app/core/api/email.service';
import {Injectable} from '@angular/core';

export interface EmailStateModel {
  items: string[];
  health?: any;
}

@State<EmailStateModel>({
  name: 'email',
  defaults: {
    items: [],
  },
})
@Injectable()
export class EmailState {
  constructor(private emailService: EmailService) {}
  //
  @Selector()
  public static getState(state: EmailStateModel): EmailStateModel {
    return state;
  }


  @Action(EmailActionSend)
  send({patchState, dispatch}: StateContext<EmailStateModel>, {payload}: CheckHealth) {
    return this.emailService.sendEmail(payload);
  }

  // gg():void {
  //
  // }


  // @Action(UpdateTodo)
  // updateTodo({getState, setState}: StateContext<TodoStateModel>, {payload, id}: UpdateTodo) {
  //   return this.todoService.updateTodo(payload, id).pipe(tap((result) => {
  //     console.log(result);
  //     const state = getState();
  //     const todoList = [...state.todos];
  //     const todoIndex = todoList.findIndex(item => item.id === id);
  //     todoList[todoIndex] = result;
  //     setState({
  //       ...state,
  //       todos: todoList,
  //     });
  //   }));
  // }
}
