import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;

     // Act
     component.addition();
     result = component.result;

     // Assert
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async() => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.addition();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');

  });



});

describe('Ui substraction-component', () => {
  //User interfaces test
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call substraction method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(0);
  });

  it('Should set operator1 model through ngModel for substraction', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the substraction button ', () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let substractionButton = fixture.debugElement.query(By.css('.substraction-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(2.5);

  });

  it('Should render substraction in result div', () => {
    // Arrange
    component.operator1 = 15;
    component.operator2 = -5;

    // Act
    component.substraction();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('20');

  });

});


describe('Ui division-component', () => {
  //User interfaces test
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call divicion method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 10;
    component.operator2 = 2;

    // Act
    component.division();
    result = component.result;

    // Assert
    expect(result).toBe(5);
  });

  it('Should set operator1 model through ngModel for substraction', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the division button ', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 0.125;
    let substractionButton = fixture.debugElement.query(By.css('.division-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(40);

  });

  it('Should render division in result div', () => {
    // Arrange
    component.operator1 = 15;
    component.operator2 = 0;

    // Act
    component.division();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('0');

  });

});

describe('Ui sqr-component', () => {
  //User interfaces test
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call sqr method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 10;
    component.operator2 = 0;

    // Act
    component.sqr();
    result = component.result;

    // Assert
    expect(result).toBe(100);
  });

  it('Should set operator1 model through ngModel for substraction', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the division button ', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 0;
    let substractionButton = fixture.debugElement.query(By.css('.sqr-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(25);

  });

  it('Should render sqr in result div', () => {
    // Arrange
    component.operator1 = 0.5;
    component.operator2 = 0;

    // Act
    component.sqr();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('0.25');

  });

});

describe('Ui exp-component', () => {
  //User interfaces test
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call exp method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 5;
    component.operator2 = 3;

    // Act
    component.exp();
    result = component.result;

    // Assert
    expect(result).toBe(125);
  });

  it('Should set operator1 model through ngModel for exp', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the exp button ', () => {
    // Arrange
    component.operator1 = 10;
    component.operator2 = 4;
    let substractionButton = fixture.debugElement.query(By.css('.exp-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(10000);

  });

  it('Should render sqr in result exp', () => {
    // Arrange
    component.operator1 = 0.5;
    component.operator2 = 6 ;

    // Act
    component.exp();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('0.015625');

  });

});


describe('Ui multiplication-component', () => {
  //User interfaces test
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call exp method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 5;
    component.operator2 = 3;

    // Act
    component.mult();
    result = component.result;

    // Assert
    expect(result).toBe(15);
  });

  it('Should set operator1 model through ngModel for multiplication', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the multiplication button ', () => {
    // Arrange
    component.operator1 = 10;
    component.operator2 = 4;
    let substractionButton = fixture.debugElement.query(By.css('.mult-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(40);

  });

  it('Should render multiplication in result exp', () => {
    // Arrange
    component.operator1 = 0.5;
    component.operator2 = 6 ;

    // Act
    component.mult();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('3');

  });

});

describe('Ui sqrt-component', () => {
  //User interfaces test
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call exp method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 25;


    // Act
    component.sqrt();
    result = component.result;

    // Assert
    expect(result).toBe(5);
  });

  it('Should set operator1 model through ngModel for sqrt', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the sqrt button ', () => {
    // Arrange
    component.operator1 = 100;
    let substractionButton = fixture.debugElement.query(By.css('.sqrt-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(10);

  });

  it('Should render sqrt in result exp', () => {
    // Arrange
    component.operator1 = 0.25;

    // Act
    component.sqrt();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('0.5');

  });

});
