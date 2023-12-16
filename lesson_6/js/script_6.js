for (let number = 20; number <= 50; number++) {
      if (number % 3 === 0 && number % 5 !== 0)
      document.write(`<div>${number}</div>`)
}

// Дано натуральні числа від 20 до 50. Надрукувати ті з них, які діляться на 3, але не діляться на 5.