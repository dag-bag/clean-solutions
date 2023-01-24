// This file contains code formet that use while development 

// Differ type of question of quiz


            {step == 10 && (
                <Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={parseInt(activeInputValue) * 30}
                    question="How many times per day do you apply skin sanitizer?">
                    <input onChange={numberInputOnChangeHandler} type="number" />
                </Question>
            )
            }


            {
                step == 1 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={activeInputValue}
                    question="How long would you like your hand sanitizer supply to last?">
                    <DurationBasedSelect onChange={(event: any) => {
                        setActiveInputValue(event.target.value)
                    }} />
                </Question>
                )
            }


            {
                step == 2 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={activeInputValueSpecialMultiSelect}
                    valueObject={{
                        'Combs and Brushes': "100 ppm",
                        'Nail Tech Tools': "500 ppm",
                        'Respirators and CPAP Parts': "25 ppm,",
                        'Pacifiers and Bottles': "10 ppm"
                    }}
                    question="Choose all that apply">
                    <MultipleSelect
                        options={['Combs and Brushes', 'Nail Tech Tools', 'Respirators and CPAP Parts', 'Pacifiers and Bottles']}
                        selectedOptions={activeInputValueSpecialMultiSelect}
                        onClick={multipleSelectInputOnChangeHandler} />

                </Question>
                )
            }

            {
                step == 3 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={activeInputValue}
                    valueObject={{
                        'short': "10 ml",
                        'medium': "10 ml",
                        'long': "10 ml",
                        'extra long': "10 ml"
                    }}
                    question="What length is your hair?">
                    <Select
                        options={['short', 'medium', 'long', 'extra long']}
                        selectedOption={activeInputValue}
                        onClick={selectInputOnChangeHandler} />

                </Question>
                )
            }

            {
                step == 0 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={activeInputValueSpecialMultiSelectNestedInputs}
                    question="How many gallons do each of your water retention or storage containment devices hold? ?">

                    <>
                        <MultipleNestedSelect
                            onChangeNestedInputs={multiSelectNestedOnChnageHandler}
                            options={['Pools, Hot tubs and Spas ', 'Canning Retort and Pasteurizer Cooling Water', 'Electronic Cooling Towers ', 'Stainless Steel Transfer Lines and Hydrocoolers', 'Other Recirculating Water Systems ']}
                            selectedOptions={activeInputValueSpecialMultiSelect}
                            onClick={multipleSelectInputOnChangeHandler} />

                    </>

                </Question>
                )
            }