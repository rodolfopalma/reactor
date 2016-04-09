class Picker:

    def __init__(self, name, preferences):
        self.name = name
        self.preferences = preferences
        self.next_preference = self.next_preference()
        self.current_preference = next(self.next_preference)

    def next_preference(self):
        for i in range(len(self.preferences)):
            yield self.preferences[i]

    def set_next_preference(self):
        self.current_preference = next(self.next_preference)


class Choice:

    def __init__(self, name, preferences, capacity=None):
        self.name = name
        self.preferences = preferences
        self.capacity = capacity

    def current_pickers(self, pickers):
        n = 0
        for picker_name in pickers:
            if pickers[picker_name].current_preference == self.name:
                n += 1
        return n

    def good_to_go(self, pickers):
        return self.current_pickers(pickers) <= self.capacity


class StableMatch:

    def __init__(self, dic_pickers, dic_choices):
        self.dic_pickers = dic_pickers
        self.dic_choices = dic_choices
        self.pickers = None
        self.choices = None
        self.matches = None
        self.create_pickers()
        self.create_choices()

    def create_pickers(self):
        pickers = self.dic_pickers
        self.pickers = {name: Picker(name=name, preferences=pickers[name]) for name in pickers}
        #self.pickers = {picker.id: picker for picker in pickers}

    def create_choices(self):
        choices = self.dic_choices
        capacity = len(self.pickers)//len(choices) + 1
        self.choices = {name: Choice(name=name, preferences=choices[name], capacity=capacity) for name in choices}
        #self.choices = {choice.id: choice for choice in choices}

    def solved(self):
        for choice_name in self.choices:
            if not self.choices[choice_name].good_to_go(self.pickers):
                return False, self.choices[choice_name]
        return True, None

    def solve(self):
        solved = False
        while not solved:
            solved, problem_choice = self.solved()
            if not solved:
                bottom_preferences = problem_choice.preferences[problem_choice.capacity + 1:]
                bottom_preferences.reverse()
                for picker_name in bottom_preferences:
                    if self.pickers[picker_name].current_preference == problem_choice.name:
                        self.pickers[picker_name].set_next_preference()
                        break
        return {self.pickers[name].name: self.pickers[name].current_preference for name in self.pickers}

if __name__ == '__main__':
    dic_pickers = {'Thomas': ['Litros', 'Abara'],
                   'Palma': ['Litros', 'Abara'],
                   'Ivan': ['Litros', 'Abara'],
                   'Polo': ['Litros', 'Abara'],
                   'Fernando': ['Litros', 'Abara'],
                   'Seto': ['Abara', 'Litros'],
                   'Jorge': ['Abara', 'Litros']}
    dic_choices = {'Litros': ['Palma', 'Jorge', ' Thomas', 'Polo', 'Seto', 'Jorge', 'Fernando'],
                   'Abara': ['Jorge', 'Thomas', 'Ivan', 'Seto', 'Fernando', 'Palma', 'Polo']}
    dic = {'pickers': dic_pickers, 'choices': dic_choices}
    problem = StableMatch(dic_pickers=dic_pickers, dic_choices=dic_choices)
    print(problem.solve())
